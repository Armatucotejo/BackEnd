require 'test_helper'

class SportInterestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sport_interest = sport_interests(:one)
  end

  test "should get index" do
    get sport_interests_url
    assert_response :success
  end

  test "should get new" do
    get new_sport_interest_url
    assert_response :success
  end

  test "should create sport_interest" do
    assert_difference('SportInterest.count') do
      post sport_interests_url, params: { sport_interest: {  } }
    end

    assert_redirected_to sport_interest_url(SportInterest.last)
  end

  test "should show sport_interest" do
    get sport_interest_url(@sport_interest)
    assert_response :success
  end

  test "should get edit" do
    get edit_sport_interest_url(@sport_interest)
    assert_response :success
  end

  test "should update sport_interest" do
    patch sport_interest_url(@sport_interest), params: { sport_interest: {  } }
    assert_redirected_to sport_interest_url(@sport_interest)
  end

  test "should destroy sport_interest" do
    assert_difference('SportInterest.count', -1) do
      delete sport_interest_url(@sport_interest)
    end

    assert_redirected_to sport_interests_url
  end
end
