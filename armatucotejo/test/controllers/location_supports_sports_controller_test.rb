require 'test_helper'

class LocationSupportsSportsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @location_supports_sport = location_supports_sports(:one)
  end

  test "should get index" do
    get location_supports_sports_url
    assert_response :success
  end

  test "should get new" do
    get new_location_supports_sport_url
    assert_response :success
  end

  test "should create location_supports_sport" do
    assert_difference('LocationSupportsSport.count') do
      post location_supports_sports_url, params: { location_supports_sport: {  } }
    end

    assert_redirected_to location_supports_sport_url(LocationSupportsSport.last)
  end

  test "should show location_supports_sport" do
    get location_supports_sport_url(@location_supports_sport)
    assert_response :success
  end

  test "should get edit" do
    get edit_location_supports_sport_url(@location_supports_sport)
    assert_response :success
  end

  test "should update location_supports_sport" do
    patch location_supports_sport_url(@location_supports_sport), params: { location_supports_sport: {  } }
    assert_redirected_to location_supports_sport_url(@location_supports_sport)
  end

  test "should destroy location_supports_sport" do
    assert_difference('LocationSupportsSport.count', -1) do
      delete location_supports_sport_url(@location_supports_sport)
    end

    assert_redirected_to location_supports_sports_url
  end
end
