(ns problem
  (:require
   [clojure.string :as str]))

(def data
  (str/split-lines (slurp "input")))

(defn parse [grid]
  (set (for [y (range (count grid))
             x (range (count (first grid)))
             :when (= (get-in grid [y x]) \#)]
         [0 y x 0])))

(defn neighbors-4 [[z y x w]]
  (for [dz [-1 0 1] dy [-1 0 1] dx [-1 0 1] dw [-1 0 1]
        :when (not (every? zero? [dz dy dx dw]))]
    [(+ z dz) (+ y dy) (+ x dx) (+ w dw)]))

(defn neighbors-3 [pos]
  (filter (fn [[_ _ _ w]] (zero? w)) (neighbors-4 pos)))

(defn step [neighbors grid]
  (set
   (filter
    (fn [pos]
      (let [c (count (filter #(grid %) (neighbors pos)))]
        (if (grid pos) (<= 2 c 3) (= c 3))))
    (distinct (apply concat (map neighbors grid))))))

(defn part-1 [grid]
  (count (first (drop 6 (iterate #(step neighbors-3 %) grid)))))

(defn part-2 [grid]
  (count (first (drop 6 (iterate #(step neighbors-4 %) grid)))))

(println (part-1 (parse data)))
(println (part-2 (parse data)))