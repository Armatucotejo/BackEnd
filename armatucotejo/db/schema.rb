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

ActiveRecord::Schema.define(version: 2018_10_12_190513) do

  create_table "admins", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bans", force: :cascade do |t|
    t.string "log"
    t.datetime "starttime"
    t.datetime "endtime"
    t.integer "user_id"
    t.integer "admin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["admin_id"], name: "index_bans_on_admin_id"
    t.index ["user_id"], name: "index_bans_on_user_id"
  end

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "location_supports_sports", force: :cascade do |t|
    t.integer "location_id"
    t.integer "sport_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_location_supports_sports_on_location_id"
    t.index ["sport_id"], name: "index_location_supports_sports_on_sport_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "address"
    t.string "contactnumber"
    t.string "name"
    t.integer "city_id"
    t.integer "sports_club_id"
    t.float "googleMapsX"
    t.float "googleMapsY"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city_id"], name: "index_locations_on_city_id"
  end

  create_table "match_participants", force: :cascade do |t|
    t.integer "player_id"
    t.integer "match_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["match_id"], name: "index_match_participants_on_match_id"
    t.index ["player_id"], name: "index_match_participants_on_player_id"
  end

  create_table "matches", force: :cascade do |t|
    t.string "description"
    t.integer "duration"
    t.datetime "datetime"
    t.integer "location_id"
    t.integer "sport_id"
    t.integer "organizer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location_id"], name: "index_matches_on_location_id"
    t.index ["sport_id"], name: "index_matches_on_sport_id"
  end

  create_table "player_score_matches", force: :cascade do |t|
    t.string "playerqualifier"
    t.string "playerqualified"
    t.integer "scorepunctuality"
    t.integer "scorefairplay"
    t.integer "score_skill"
    t.string "match"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.date "birth"
    t.string "gender"
    t.string "cellphone"
    t.integer "scorepunctuality"
    t.integer "score_sportsmanship"
    t.integer "scorefairplay"
    t.integer "score_skill"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reasons", force: :cascade do |t|
    t.string "name"
    t.integer "ban_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ban_id"], name: "index_reasons_on_ban_id"
  end

  create_table "sport_interests", force: :cascade do |t|
    t.integer "player_id"
    t.integer "sport_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_sport_interests_on_player_id"
    t.index ["sport_id"], name: "index_sport_interests_on_sport_id"
  end

  create_table "sports", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sports_clubs", force: :cascade do |t|
    t.string "mainaddress"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password"
    t.string "name"
    t.string "username"
    t.datetime "logindate"
    t.datetime "logoutdate"
    t.integer "user_data_id"
    t.string "user_data_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
