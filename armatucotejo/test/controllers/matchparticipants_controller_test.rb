require 'test_helper'

class MatchparticipantsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @matchparticipant = matchparticipants(:one)
  end

  test "should get index" do
    get matchparticipants_url
    assert_response :success
  end

  test "should get new" do
    get new_matchparticipant_url
    assert_response :success
  end

  test "should create matchparticipant" do
    assert_difference('Matchparticipant.count') do
      post matchparticipants_url, params: { matchparticipant: { matchid: @matchparticipant.matchid, playerid: @matchparticipant.playerid } }
    end

    assert_redirected_to matchparticipant_url(Matchparticipant.last)
  end

  test "should show matchparticipant" do
    get matchparticipant_url(@matchparticipant)
    assert_response :success
  end

  test "should get edit" do
    get edit_matchparticipant_url(@matchparticipant)
    assert_response :success
  end

  test "should update matchparticipant" do
    patch matchparticipant_url(@matchparticipant), params: { matchparticipant: { matchid: @matchparticipant.matchid, playerid: @matchparticipant.playerid } }
    assert_redirected_to matchparticipant_url(@matchparticipant)
  end

  test "should destroy matchparticipant" do
    assert_difference('Matchparticipant.count', -1) do
      delete matchparticipant_url(@matchparticipant)
    end

    assert_redirected_to matchparticipants_url
  end
end
