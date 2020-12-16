(ns problem
  (:require
   [clojure.string :as str]))

(def data
  (str/split-lines (slurp "input")))

(defn parse [[earliest-departure busses]]
  [(read-string earliest-departure)
   (->> (str/split busses #",")
        (map-indexed (fn [i bus] {:index i :id (read-string bus)}))
        (filter (comp int? :id)))])

(defn part-1 [[earliest-departure busses]]
  (let [wait #(mod (- earliest-departure) %)
        bus (apply min-key wait (map :id busses))]
    (* bus (wait bus))))

;; It's the Chinese remainder theorem! Algorithm described here:
;; https://en.wikipedia.org/wiki/Chinese_remainder_theorem#Search_by_sieving
(defn part-2 [[_ [{:keys [index id]} & rem]]]
  (loop [t (- id index) step id rem rem]
    (if-let [{:keys [index id]} (first rem)]
      (if (zero? (mod (+ t index) id))
        (recur t (* step id) (rest rem))
        (recur (+ t step) step rem))
      t)))

;; (def data
;;   (str/split-lines (slurp "small")))

;; (defn parse [[estimate buses]]
;;   {:estimate (read-string estimate)
;;    :in-service-buses (map read-string (filter #(not= "x" %) (str/split buses #",")))
;;    :buses (map-indexed vector (str/split buses #","))})

;; (defn part-1 [{:keys [estimate in-service-buses]}]
;;   (apply * (apply min-key first (mapv vector (map #(- (* (Math/ceil (/ estimate %)) %) estimate) in-service-buses) in-service-buses))))

(println (part-2 (parse data)))