package dataStructures;

import java.util.*;
import java.io.*;

public class Directory {
    private Chapter[] chapters;

    /**
     * The file path to where the data required for the directory is located
     */
    public static final String FILE_PATH = "/data/";

    /**
     * Constructs a new Directory object to allow for communication with the front-end
     *
     * Uses the path FILE_PATH to reach the resource directory. Should contain:
     *             directory.txt - a text file containing the names of all chapters separated by line
     *             chapters - a directory containing .txt files of the content of each chapter
     *                          inner .txt files should be named after their chapter order starting at 1
     */
    public Directory() {
        chapters = loadChapters(loadTitles());
    }

    /**
     *
     * @return a list of strings that represents the titles of the chapters from the directory.txt file
     */
    private List<String> loadTitles() {
        try (Scanner sc = new Scanner(new File(Directory.class.getResource(FILE_PATH + "directory.txt").getPath()))) {
            ArrayList<String> titles = new ArrayList<>();
            while (sc.hasNextLine()) {
                titles.add(sc.nextLine());
            }
            return titles;
        } catch (FileNotFoundException ex) {
            throw new IllegalStateException("Missing directory.txt");
        }
    }

    /**
     *
     * @param titles the titles of the chapters in the appropriate order
     * @return a list of crisisServer.dataStructures.Chapter objects that contain the loaded in data from the individual
     * chapter files
     */
    private Chapter[] loadChapters(List<String> titles) {
        File chapters = new File(Directory.class.getResource(FILE_PATH + "chapters").getPath());
        if (!chapters.exists() || !chapters.isDirectory()) {
            throw new IllegalStateException("Missing chapters directory");
        } else if (chapters.listFiles().length != titles.size()) {
            throw new IllegalStateException("Number of chapters in directory.txt doesn't match that in chapters directory");
        }

        File resources = new File(Directory.class.getResource(FILE_PATH + "resources").getPath());
        if (!resources.exists() || !resources.isDirectory()) {
            throw new IllegalStateException("Missing resources directory");
        } else if (resources.listFiles().length != titles.size()) {
            throw new IllegalStateException("Number of chapters in directory.txt doesn't match that in resources directory");
        }

        Chapter[] loaded = new Chapter[titles.size()];
        File[] wordFiles = chapters.listFiles();

        for (int i = 0; i < wordFiles.length; i++) {
            try {
                int wordIndex = Integer.valueOf(wordFiles[i].getName().replace(".txt", "")) - 1;
                loaded[wordIndex] = new Chapter(titles.get(wordIndex), wordFiles[i], (wordIndex + 1) + ".csv");
            } catch (NumberFormatException ex) {
                throw new IllegalStateException("Chapters / resources directory inner .txt files should be named after their chapter order " +
                                                "starting at 1");
            }
        }
        return loaded;
    }

    /**
     *
     * @return a list of strings representing the chapter titles stored in the directory
     */
    public List<String> getChapters() {
        List<String> titles = new ArrayList<>();
        for (Chapter c : chapters) {
            titles.add(c.getTitle());
        }
        return titles;
    }

    /**
     *
     * @param term the term ot be searched for
     * @return a list of strings representing the chapter titles that contain the term in some capacity
     */
    public List<String> chaptersContain(String term) {
        List<String> titles = new ArrayList<>();
        for (Chapter c : chapters) {
            if (c.contains(term))
                titles.add(c.getTitle());
        }
        return titles;
    }

    /**
     *
     * @param chapter the chapter whose resources are desired
     * @return a mapping of a character county to the resources associated with said county
     */
    public Map<Character, List<Resource>> chapterResources(int chapter) {
        return chapters[chapter - 1].getResources();
    }

    /**
     * A private inner class used to keep track of the words within each chapter
     */
    private class Chapter {
        private String title;
        private Set<String> words;
        private Map<Character, List<Resource>> resources;

        /**
         *
         * @param title the title of this chapter
         * @param wordsFile the file containing the words stored within this chapter
         * @param resourceFile, the file containing the resources for this chapter
         */
        public Chapter(String title, File wordsFile, String resourceFile) {
            try {
                this.title = title;
                words = loadWords(wordsFile);
                resources = loadResources(resourceFile);
            } catch (FileNotFoundException ex) {
                throw new IllegalArgumentException(title + " words / resource file is invalid");
            }
        }

        /**
         *
         * @param f the file containing the words stored within this chapter
         * @return a strings representing the words within this chapter
         * @throws FileNotFoundException
         */
        private Set<String> loadWords(File f) throws FileNotFoundException {
            Set<String> words = new HashSet<>();
            Scanner sc = new Scanner(f);
            while (sc.hasNextLine()) {
                Scanner word = new Scanner(sc.nextLine());
                while (word.hasNext()) {
                    words.add(normalize(word.next().toLowerCase()));
                }
            }
            return words;
        }

        /**
         *
         * @param file the name of the csv file in data/resources that stores the resource
         *        information for the given chapter
         * @return a list of Resources representing said resources
         * @throws FileNotFoundException
         */
        private Map<Character, List<Resource>> loadResources(String file) throws FileNotFoundException {
            try {
                Iterator<Resource> itr = ResourceParser.parseData(file);
                Map<Character, List<Resource>> m = new HashMap<>();
                while (itr.hasNext()) {
                    Resource r = itr.next();
                    for (int i = 0; i < r.getCounty().length(); i++) {
                        char c = r.getCounty().charAt(i);
                        if (!m.containsKey(c))
                            m.put(c, new ArrayList<>());
                        m.get(c).add(r);
                    }
                }

                for (Character c : m.keySet()) {
                    Collections.sort(m.get(c));
                }
                return m;
            } catch (IllegalArgumentException ex) {
                throw new FileNotFoundException();
            }
        }

        /**
         *
         * @return the title of this chapter
         */
        public String getTitle() {
            return title;
        }

        /**
         *
         * @param term a search term
         * @return whether or not this chapter contains the term in some capacity
         */
        public boolean contains(String term) {
            for (String s : words) {
                if (s.contains(normalize(term))) return true;
            }
            return false;
        }

        /**
         *
         * @return a mapping of county to all the resources associated with the counties county
         */
        public Map<Character, List<Resource>> getResources() {
            return Collections.unmodifiableMap(resources);
        }

        /**
         *
         * @param s the string to be normalized
         * @return the normalized version of s
         */
        private String normalize(String s) {
            return s.toLowerCase().replaceAll("(^\\p{P}+\\s*)|(\\s*\\p{P}+$)", "");
        }
    }
}
