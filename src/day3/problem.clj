(ns problem)

(defn slope [right down height width]
  (for [i (range)
        :let [y (* down i) x (* right i)]
        :while (< y height)]
    [y (mod x width)]))

(defn count-trees [grid right down]
  (->> (slope right down (count grid) (count (first grid)))
       (filter #(= (get-in grid %) \#))
       count))

(defn part-1 [grid]
  (count-trees grid (count (first grid)) (count grid)))

(defn part-2 [grid]
  (apply * (map #(apply count-trees grid %) 
                [[1 1] [3 1] [5 1] [7 1] [1 2]])))