# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_03_193908) do

  create_table "admins", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bans", force: :cascade do |t|
    t.string "log"
    t.date "starttime"
    t.date "endtime"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "address"
    t.string "city"
    t.string "contactnumber"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locationsupportssports", force: :cascade do |t|
    t.string "sport"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "matches", force: :cascade do |t|
    t.string "description"
    t.integer "duration"
    t.date "datetime"
    t.integer "organizerid_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["organizerid_id"], name: "index_matches_on_organizerid_id"
  end

  create_table "matchparticipants", force: :cascade do |t|
    t.string "playerid"
    t.string "matchid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "player_score_matches", force: :cascade do |t|
    t.string "playerqualifier"
    t.string "playerqualified"
    t.integer "scorepuntuality"
    t.integer "scorefairplay"
    t.integer "scoretechnique"
    t.string "match"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.integer "scorepuntuality"
    t.integer "scorefairplay"
    t.integer "scoretechnique"
    t.date "birth"
    t.string "gender"
    t.string "cellphone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reasons", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sportinterests", force: :cascade do |t|
    t.integer "sport_id"
    t.integer "player_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_sportinterests_on_player_id"
    t.index ["sport_id"], name: "index_sportinterests_on_sport_id"
  end

  create_table "sports", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password"
    t.string "name"
    t.string "username"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
