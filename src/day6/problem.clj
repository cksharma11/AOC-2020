(ns problem
  (:require
   [clojure.string :as str]
   [clojure.set :as set]))

(def data (str/split (slurp "input") #"\n\n"))

(defn process [combine data]
  (->> (str/split-lines data)
       (map set)
       (apply combine)
       count))

(defn sum [data]
  (reduce + data))

(defn part-1 [data]
  (sum (map (partial process set/union) data)))

(defn part-2 [data]
  (sum (map (partial process set/intersection) data)))
