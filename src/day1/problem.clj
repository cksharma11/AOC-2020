(ns problem
  (:require
   [clojure.math.combinatorics :as comb]
   [clojure.string :as s]))

(def expense-report (map read-string (s/split-lines (slurp "input"))))

(defn process-report [n report]
  (->> (comb/combinations n report)
       (filter #(= (apply + %) 2020))
       first
       (apply *)))

(defn part-1 [expense-report]
  (process-report 2 expense-report))

(defn part-2 [expense-report]
  (process-report 3 expense-report))
