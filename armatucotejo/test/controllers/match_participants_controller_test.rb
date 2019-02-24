require 'test_helper'

class MatchParticipantsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @match_participant = match_participants(:one)
  end

  test "should get index" do
    get match_participants_url
    assert_response :success
  end

  test "should get new" do
    get new_match_participant_url
    assert_response :success
  end

  test "should create match_participant" do
    assert_difference('MatchParticipant.count') do
      post match_participants_url, params: { match_participant: {  } }
    end

    assert_redirected_to match_participant_url(MatchParticipant.last)
  end

  test "should show match_participant" do
    get match_participant_url(@match_participant)
    assert_response :success
  end

  test "should get edit" do
    get edit_match_participant_url(@match_participant)
    assert_response :success
  end

  test "should update match_participant" do
    patch match_participant_url(@match_participant), params: { match_participant: {  } }
    assert_redirected_to match_participant_url(@match_participant)
  end

  test "should destroy match_participant" do
    assert_difference('MatchParticipant.count', -1) do
      delete match_participant_url(@match_participant)
    end

    assert_redirected_to match_participants_url
  end
end
