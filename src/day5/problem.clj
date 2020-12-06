(ns problem
  (:require
   [clojure.string :as str]
   [clojure.set :as set]))

(def data
  (str/split-lines (slurp "input")))

(defn decode [s]
  (read-string (apply str "2r" (map {\F \0 \B \1 \L \0 \R \1} s))))

(defn part-1 [passes]
  (apply max (map decode passes)))

(defn part-2 [passes]
  (let [occupied (set (map decode passes))
        seats (set (range (apply min occupied) (inc (apply max occupied))))]
    (first (set/difference seats occupied))))
