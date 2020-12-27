(ns day-19
  (:require
   [clojure.string :as str]))

(def data
  (map str/split-lines (str/split (slurp "input") #"\n\n")))

(defn parse-rule [rule]
  (let [[left right] (str/split rule #": ")]
    [(read-string left) (map read-string (str/split right #" "))]))

(defn parse [[rules messages]]
  [(into {} (map parse-rule rules)) messages])

(defn build-re [rules max-depth n]
  (if (pos? max-depth)
    (str \(
         (apply str
                (map #(if (int? %) (build-re rules (dec max-depth) %) %) (rules n)))
         \))
    "x"))

(defn part-1 [[rules messages]]
  (let [re (re-pattern (build-re rules 16 0))]
    (count (filter #(re-matches re %) messages))))

(defn part-2 [[rules messages]]
  (let [rules* (assoc rules 8 '(42 | 42 8) 11 '(42 31 | 42 11 31))
        re (re-pattern (build-re rules* 16 0))]
    (count (filter #(re-matches re %) messages))))

(println (part-1 (parse data)))
(println (part-2 (parse data)))