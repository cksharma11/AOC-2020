(ns problem
  (:require
   [clojure.string :as str]))

(defn parse [line]
  (let [[_ n m [c] pass] (re-find #"(\d+)-(\d+) (.): (.*)" line)]
    [(read-string n) (read-string m) c pass]))

(def data
  (map parse (str/split-lines (slurp "input"))))

(defn validator-1? [[min max char pass]]
  (<= min (count (filter #{char} pass)) max))

(def part-1 (count (filter validator-1? data)))

(defn validator-2? [[first second char pass]]
  (= (count (filter #{char} (map #(nth pass (dec %)) [first second]))) 1))

(def part-2 (count (filter validator-2? data)))