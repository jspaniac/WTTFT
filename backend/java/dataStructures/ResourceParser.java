package dataStructures;

import com.opencsv.bean.CsvToBeanBuilder;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.Iterator;

public class ResourceParser {
    /**
     * Reads the resource dataset. Each line of the input file contains a string of county characters, name,
     * phone, and website separated by ',' characters
     *
     * @param filename the file that will be read
     * @return an Iterator of Resource beans that represent the resources parsed from the file
     */
    public static Iterator<Resource> parseData(String filename) {
        InputStream stream = ResourceParser.class.getResourceAsStream("/data/resources/" + filename);
        if(stream == null) {
            throw new IllegalArgumentException("provided an invalid file name");
        }
        Reader reader = new BufferedReader(new InputStreamReader(stream));

        Iterator<Resource> csvResourceIterator = new CsvToBeanBuilder<Resource>(reader)
                .withType(Resource.class)
                .withSeparator(',')
                .withIgnoreLeadingWhiteSpace(true)
                .build()
                .iterator();
        return csvResourceIterator;
    }
}
