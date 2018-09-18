require 'test_helper'

class LocationsupportssportsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @locationsupportssport = locationsupportssports(:one)
  end

  test "should get index" do
    get locationsupportssports_url
    assert_response :success
  end

  test "should get new" do
    get new_locationsupportssport_url
    assert_response :success
  end

  test "should create locationsupportssport" do
    assert_difference('Locationsupportssport.count') do
      post locationsupportssports_url, params: { locationsupportssport: { location: @locationsupportssport.location, sport: @locationsupportssport.sport } }
    end

    assert_redirected_to locationsupportssport_url(Locationsupportssport.last)
  end

  test "should show locationsupportssport" do
    get locationsupportssport_url(@locationsupportssport)
    assert_response :success
  end

  test "should get edit" do
    get edit_locationsupportssport_url(@locationsupportssport)
    assert_response :success
  end

  test "should update locationsupportssport" do
    patch locationsupportssport_url(@locationsupportssport), params: { locationsupportssport: { location: @locationsupportssport.location, sport: @locationsupportssport.sport } }
    assert_redirected_to locationsupportssport_url(@locationsupportssport)
  end

  test "should destroy locationsupportssport" do
    assert_difference('Locationsupportssport.count', -1) do
      delete locationsupportssport_url(@locationsupportssport)
    end

    assert_redirected_to locationsupportssports_url
  end
end
