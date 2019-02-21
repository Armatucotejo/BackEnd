require "application_system_test_case"

class PlayerScoreMatchesTest < ApplicationSystemTestCase
  setup do
    @player_score_match = player_score_matches(:one)
  end

  test "visiting the index" do
    visit player_score_matches_url
    assert_selector "h1", text: "Player Score Matches"
  end

  test "creating a Player score match" do
    visit player_score_matches_url
    click_on "New Player Score Match"

    fill_in "Match", with: @player_score_match.match
    fill_in "Playerqualified", with: @player_score_match.playerqualified
    fill_in "Playerqualifier", with: @player_score_match.playerqualifier
    fill_in "Scorefairplay", with: @player_score_match.scorefairplay
    fill_in "Scorepuntuality", with: @player_score_match.scorepuntuality
    fill_in "Scoretechnique", with: @player_score_match.scoretechnique
    click_on "Create Player score match"

    assert_text "Player score match was successfully created"
    click_on "Back"
  end

  test "updating a Player score match" do
    visit player_score_matches_url
    click_on "Edit", match: :first

    fill_in "Match", with: @player_score_match.match
    fill_in "Playerqualified", with: @player_score_match.playerqualified
    fill_in "Playerqualifier", with: @player_score_match.playerqualifier
    fill_in "Scorefairplay", with: @player_score_match.scorefairplay
    fill_in "Scorepuntuality", with: @player_score_match.scorepuntuality
    fill_in "Scoretechnique", with: @player_score_match.scoretechnique
    click_on "Update Player score match"

    assert_text "Player score match was successfully updated"
    click_on "Back"
  end

  test "destroying a Player score match" do
    visit player_score_matches_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Player score match was successfully destroyed"
  end
end
