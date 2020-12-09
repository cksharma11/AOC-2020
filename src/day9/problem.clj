(ns problem
  (:require
   [clojure.string :as str]))

(def data (map read-string (str/split-lines (slurp "input"))))

(defn subseq-of-len
  [n coll]
  (cond
    (zero? n) ['()]
    (empty? coll) []
    :else (concat
           (map #(conj % (first coll)) (subseq-of-len (dec n) (next coll)))
           (subseq-of-len n (next coll)))))

(defn valid? [number last-25]
  (->> (subseq-of-len 2 last-25)
       (some #(= (apply + %) number))))

(defn part-1 [data slop]
  (for [i (range (count data))
        :let [last-25 (take slop (drop i data))
              number (first (drop (+ i slop) data))]
        :when (not (valid? number last-25))]
    number))


(defn part-2 [numbers]
  (let [invalid 15690279]
    (loop [i 0 
           j 1]
      (let [subset (drop i (take j numbers))
            sum (apply + subset)]
        (cond
          (= sum invalid) (+ (apply min subset) (apply max subset))
          (< sum invalid) (recur i (inc j))
          (> sum invalid) (recur (inc i) j))))))

(println (part-2 data))
