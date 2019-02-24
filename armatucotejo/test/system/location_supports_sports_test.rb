require "application_system_test_case"

class LocationSupportsSportsTest < ApplicationSystemTestCase
  setup do
    @location_supports_sport = location_supports_sports(:one)
  end

  test "visiting the index" do
    visit location_supports_sports_url
    assert_selector "h1", text: "Location Supports Sports"
  end

  test "creating a Location supports sport" do
    visit location_supports_sports_url
    click_on "New Location Supports Sport"

    click_on "Create Location supports sport"

    assert_text "Location supports sport was successfully created"
    click_on "Back"
  end

  test "updating a Location supports sport" do
    visit location_supports_sports_url
    click_on "Edit", match: :first

    click_on "Update Location supports sport"

    assert_text "Location supports sport was successfully updated"
    click_on "Back"
  end

  test "destroying a Location supports sport" do
    visit location_supports_sports_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Location supports sport was successfully destroyed"
  end
end
