(ns problem
  (:require
   [clojure.string :as str]))

(def data
  (str/split-lines (slurp "input")))

(defn parse [grid]
  (into {} (for [y (range (count grid))
                 x (range (count (first grid)))]
             [[y x] (case (get-in grid [y x])
                      \L :empty
                      \. :floor)])))

(def directions
  (for [y [-1 0 1] x [-1 0 1] :when (not= [y x] [0 0])] [y x]))

(defn adjacent [seats [y x]]
  (map (fn [[dy dx]] (seats [(+ y dy) (+ x dx)])) directions))

(defn ray [seat [dy dx]]
  (rest (iterate (fn [[y x]] [(+ y dy) (+ x dx)]) seat)))

(defn visible [seats seat]
  (map
   #(some #{:occupied :empty}
          (take-while some? (map seats (ray seat %))))
   directions))

(defn step [nearby tolerance seats]
  (into {}
        (map
         (fn [[seat state]]
           (let [c (count (filter #{:occupied} (nearby seats seat)))]
             [seat (case state
                     :empty (if (zero? c) :occupied :empty)
                     :occupied (if (>= c tolerance) :empty :occupied)
                     state)]))
         seats)))

(defn simulate [nearby tolerance seats]
  (let [seats1 (step nearby tolerance seats)]
    ;; Checking for equality here rather then returning a flag from step seems
    ;; wasteful, but it actually makes a negligable difference to the runtime.
    (if (= seats1 seats)
      seats
      (recur nearby tolerance seats1))))

(defn part-1 [seats]
  (count (filter #{:occupied} (vals (simulate adjacent 4 seats)))))

(defn part-2 [seats]
  (count (filter #{:occupied} (vals (simulate visible 5 seats)))))

(println (take 5 (parse data)))
;; (println (part-2 (parse data)))

;; (def data (str/split-lines (slurp "small")))
;; (def length  (count (first data)))

;; (def find-rule [-1 1
;;                 (- length 1) length (+ length 1)
;;                 (- 0 (- length 1)) (- 0 length) (- 0 (+ length 1))])

;; (def seats (flatten  (map #(map identity %) data)))

;; (defn find-all-neighbour [numbers position]
;;   (map #(nth numbers (+ position %) nil) find-rule))

;; (defn next-gen [numbers]
;;   (map-indexed (fn [i v]
;;          (let [freq (frequencies (find-all-neighbour numbers i))]
;;            (cond
;;              (and (= v \L) (not (get freq \#))) \#
;;              (and (= v \#) (>= 4 (get freq \#))) \L
;;              :else v)))
;;        numbers))

;; (println (partition 4 (next-gen (next-gen seats))))