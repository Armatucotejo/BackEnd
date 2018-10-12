require 'test_helper'

class SportsClubsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sports_club = sports_clubs(:one)
  end

  test "should get index" do
    get sports_clubs_url
    assert_response :success
  end

  test "should get new" do
    get new_sports_club_url
    assert_response :success
  end

  test "should create sports_club" do
    assert_difference('SportsClub.count') do
      post sports_clubs_url, params: { sports_club: { mainaddress: @sports_club.mainaddress } }
    end

    assert_redirected_to sports_club_url(SportsClub.last)
  end

  test "should show sports_club" do
    get sports_club_url(@sports_club)
    assert_response :success
  end

  test "should get edit" do
    get edit_sports_club_url(@sports_club)
    assert_response :success
  end

  test "should update sports_club" do
    patch sports_club_url(@sports_club), params: { sports_club: { mainaddress: @sports_club.mainaddress } }
    assert_redirected_to sports_club_url(@sports_club)
  end

  test "should destroy sports_club" do
    assert_difference('SportsClub.count', -1) do
      delete sports_club_url(@sports_club)
    end

    assert_redirected_to sports_clubs_url
  end
end
