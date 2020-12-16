(ns problem)

(def input [19,20,14,0,9,1])
(defn turn [[prev i mem]]
  (let [seen (get mem prev)
        age (if seen (- i seen) 0)]
    [age (inc i) (assoc! mem prev i)]))

(defn game [seed n]
  (nth
   (->> (iterate turn
                 [(last seed)
                  (dec (count seed))
                  (transient
                   (apply assoc (vec (repeat n nil))
                          (flatten (map-indexed (fn [i m] [m i]) (drop-last seed)))))])
        rest
        (map first)
        (concat seed))
   (dec n)))

(println (game input 30000000))