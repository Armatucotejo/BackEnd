require 'test_helper'

class SportinterestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sportinterest = sportinterests(:one)
  end

  test "should get index" do
    get sportinterests_url
    assert_response :success
  end

  test "should get new" do
    get new_sportinterest_url
    assert_response :success
  end

  test "should create sportinterest" do
    assert_difference('Sportinterest.count') do
      post sportinterests_url, params: { sportinterest: { player_id: @sportinterest.player_id, sport_id: @sportinterest.sport_id } }
    end

    assert_redirected_to sportinterest_url(Sportinterest.last)
  end

  test "should show sportinterest" do
    get sportinterest_url(@sportinterest)
    assert_response :success
  end

  test "should get edit" do
    get edit_sportinterest_url(@sportinterest)
    assert_response :success
  end

  test "should update sportinterest" do
    patch sportinterest_url(@sportinterest), params: { sportinterest: { player_id: @sportinterest.player_id, sport_id: @sportinterest.sport_id } }
    assert_redirected_to sportinterest_url(@sportinterest)
  end

  test "should destroy sportinterest" do
    assert_difference('Sportinterest.count', -1) do
      delete sportinterest_url(@sportinterest)
    end

    assert_redirected_to sportinterests_url
  end
end
