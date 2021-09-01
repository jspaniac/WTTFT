import com.google.gson.Gson;
import spark.Spark;
import java.util.*;

import dataStructures.*;
import utils.CORSFilter;

public class Application {

    public static void main(String[] args) {
        Spark.port(getHerokuAssignedPort());

        CORSFilter corsFilter = new CORSFilter();
        corsFilter.apply();

        Directory d = new Directory();

        Spark.get("/", (req, res) -> {
            res.status(200);
            return "test";
        });

        //Returns the chapters that contain the passed in term
        Spark.get("/search", (req, res) -> {
            String term = req.queryParams("term");
            if (term == null) {
                res.status(400);
                return "missing term";
            } else {
                res.status(200);
                List<String> matches = d.getChapters();

                Scanner sc = new Scanner(term);
                while (sc.hasNext() && !matches.isEmpty()) {
                    List<String> currMatch = d.chaptersContain(sc.next());
                    matches.retainAll(currMatch);
                }
                return new Gson().toJson(matches);
            }
        });

        //Returns all the resources for a given county and a given chapter
        Spark.get("/resources", (req, res) -> {
            String chapter = req.queryParams("chapter");
            if (chapter == null) {
                res.status(400);
                return "missing chapter";
            }

            try {
                int c = Integer.parseInt(chapter);
                res.status(200);
                return new Gson().toJson(d.chapterResources(c));
            } catch (NumberFormatException ex) {
                res.status(400);
                return "chapter should be a number";
            }
        });
    }

    public static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 4567; //return default port if heroku-port isn't set (i.e. on localhost)
    }
}
