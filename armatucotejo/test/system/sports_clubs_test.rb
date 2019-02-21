require "application_system_test_case"

class SportsClubsTest < ApplicationSystemTestCase
  setup do
    @sports_club = sports_clubs(:one)
  end

  test "visiting the index" do
    visit sports_clubs_url
    assert_selector "h1", text: "Sports Clubs"
  end

  test "creating a Sports club" do
    visit sports_clubs_url
    click_on "New Sports Club"

    fill_in "Mainaddress", with: @sports_club.mainaddress
    click_on "Create Sports club"

    assert_text "Sports club was successfully created"
    click_on "Back"
  end

  test "updating a Sports club" do
    visit sports_clubs_url
    click_on "Edit", match: :first

    fill_in "Mainaddress", with: @sports_club.mainaddress
    click_on "Update Sports club"

    assert_text "Sports club was successfully updated"
    click_on "Back"
  end

  test "destroying a Sports club" do
    visit sports_clubs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Sports club was successfully destroyed"
  end
end
