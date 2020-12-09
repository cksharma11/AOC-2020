(ns problem
  (:require
   [clojure.string :as str]))

(def data (str/split-lines (slurp "input")))

(defn parse [line]
  (let [[op v] (str/split line #" ")]
    {:op op :val (read-string v)}))

(defn execute [instruction current acc]
  (case (str (:op instruction))
    "jmp" {:acc acc :current (+ current (:val instruction))}
    "acc" {:acc (+ acc (:val instruction)) :current (inc current)}
    "nop" {:acc acc :current (inc current)}))

(defn machine [data acc current visited]
  (if (.contains visited current)
    acc
    (let [result (execute (nth data current) current acc)]
      (machine data (:acc result) (:current result) (conj visited current)))))

(println (machine (map parse data) 0 0 []))