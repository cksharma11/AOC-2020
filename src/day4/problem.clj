(ns problem
  (:require
   [clojure.string :as str]
   [clojure.set :as set]))

(defn parse-kv [s]
  (let [[k v] (str/split s #":")]
    [(keyword k) v]))

(defn parse-passport [s]
  (into {} (map parse-kv (str/split s #"\s+"))))

(defn parse [s]
  (map parse-passport (str/split s #"\n\n")))

(def data
  (parse (slurp "input")))

(defn valid-1? [passport]
  (set/subset?
   #{:byr :iyr :eyr :hgt :hcl :ecl :pid}
   (set (keys passport))))

(defn valid-2? [{:keys [byr iyr eyr hgt hcl ecl pid]}]
  (and
   (<= 1920 (read-string byr) 2002)
   (<= 2010 (read-string iyr) 2020)
   (<= 2020 (read-string eyr) 2030)
   (let [[_ n units] (re-matches #"(\d+)(..)" hgt)]
     (case units
       "cm" (<= 150 (read-string n) 193)
       "in" (<= 59 (read-string n) 76)
       false))
   (re-matches #"#[0-9a-f]{6}" hcl)
   (#{"amb" "blu" "brn" "gry" "grn" "hzl" "oth"} ecl)
   (re-matches #"\d{9}" pid)))

(defn part-1 [passports]
  (count (filter valid-1? passports)))

(defn part-2 [passports]
  (count (filter #(and (valid-1? %) (valid-2? %)) passports)))
