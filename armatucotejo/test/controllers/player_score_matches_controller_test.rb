require 'test_helper'

class PlayerScoreMatchesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @player_score_match = player_score_matches(:one)
  end

  test "should get index" do
    get player_score_matches_url
    assert_response :success
  end

  test "should get new" do
    get new_player_score_match_url
    assert_response :success
  end

  test "should create player_score_match" do
    assert_difference('PlayerScoreMatch.count') do
      post player_score_matches_url, params: { player_score_match: { match: @player_score_match.match, playerqualified: @player_score_match.playerqualified, playerqualifier: @player_score_match.playerqualifier, scorefairplay: @player_score_match.scorefairplay, scorepuntuality: @player_score_match.scorepuntuality, scoretechnique: @player_score_match.scoretechnique } }
    end

    assert_redirected_to player_score_match_url(PlayerScoreMatch.last)
  end

  test "should show player_score_match" do
    get player_score_match_url(@player_score_match)
    assert_response :success
  end

  test "should get edit" do
    get edit_player_score_match_url(@player_score_match)
    assert_response :success
  end

  test "should update player_score_match" do
    patch player_score_match_url(@player_score_match), params: { player_score_match: { match: @player_score_match.match, playerqualified: @player_score_match.playerqualified, playerqualifier: @player_score_match.playerqualifier, scorefairplay: @player_score_match.scorefairplay, scorepuntuality: @player_score_match.scorepuntuality, scoretechnique: @player_score_match.scoretechnique } }
    assert_redirected_to player_score_match_url(@player_score_match)
  end

  test "should destroy player_score_match" do
    assert_difference('PlayerScoreMatch.count', -1) do
      delete player_score_match_url(@player_score_match)
    end

    assert_redirected_to player_score_matches_url
  end
end
