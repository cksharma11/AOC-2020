(ns problem
  (:require
   [clojure.string :as str]))

(def data
  (str/split-lines (slurp "input")))

(defn parse-rule [rule]
  (let [[_ outer] (re-find #"(\w+ \w+) bags contain" rule)]
    {outer (->> (re-seq #"(\d+) (\w+ \w+) bag" rule)
                (map (fn [[_ n c]] {c (read-string n)}))
                (into {}))}))

(defn parse [rules]
  (into {} (map parse-rule rules)))

(defn eventually-contains? [rules current target]
  (some #(or (= % target) (eventually-contains? rules % target)) (keys (rules current))))

(defn count-bags [rules bag]
  (apply + (map (fn [[b n]] (* n (inc (count-bags rules b)))) (rules bag))))

(defn part-1 [rules]
  (count (filter #(eventually-contains? rules % "shiny gold") (keys rules))))

(defn part-2 [rules]
  (count-bags rules "shiny gold"))

(println (part-1 (parse data)))
(println (part-2 (parse data)))


