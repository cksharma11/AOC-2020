(ns problem
  (:require
   [clojure.string :as str]))

(def data (map read-string (str/split-lines (slurp "small"))))

(defn part-1 [adapters]
  (let [device (+ (apply max adapters) 3)
        diffs (->> (conj adapters 0 device)
                   sort
                   (partition 2 1)
                   (map (fn [[a b]] (- b a)))
                   frequencies)]
    (* (get diffs 1 0) (get diffs 3 0))))

(defn part-2 [adapters]
  (let [device (+ (apply max adapters) 3)
        routes (reduce
                (fn [r a]
                  (println (assoc r a
                                      (apply + (map #(get r % 0) (range (- a 3) a)))))
                  (assoc r a
                         (apply + (map #(get r % 0) (range (- a 3) a)))))
                {0 1}
                (sort (conj adapters device)))]
    (get routes device)))

(println (part-2 data))
