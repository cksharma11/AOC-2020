(ns problem
  (:require
   [clojure.string :as str]))

(def data
  (str/split-lines (slurp "input")))

(defn math [p [x f y g & more]]
  (cond
    (seq? x) (recur p (list* (math p x) f y g more))
    (seq? y) (recur p (list* x f (math p y) g more))
    (and g (> (p g) (p f))) (recur p (list x f (math p (list* y g more))))
    f (recur p (list* ((resolve f) x y) g more))
    :else x))

(defn part-1 [homework]
  (apply + (map #(math {'+ 0 '* 0} (read-string (str "(" % ")"))) homework)))

(defn part-2 [homework]
  (apply + (map #(math {'+ 1 '* 0} (read-string (str "(" % ")"))) homework)))

(println (part-1 data))
(println (part-2 data))