require "application_system_test_case"

class LocationsupportssportsTest < ApplicationSystemTestCase
  setup do
    @locationsupportssport = locationsupportssports(:one)
  end

  test "visiting the index" do
    visit locationsupportssports_url
    assert_selector "h1", text: "Locationsupportssports"
  end

  test "creating a Locationsupportssport" do
    visit locationsupportssports_url
    click_on "New Locationsupportssport"

    fill_in "Location", with: @locationsupportssport.location
    fill_in "Sport", with: @locationsupportssport.sport
    click_on "Create Locationsupportssport"

    assert_text "Locationsupportssport was successfully created"
    click_on "Back"
  end

  test "updating a Locationsupportssport" do
    visit locationsupportssports_url
    click_on "Edit", match: :first

    fill_in "Location", with: @locationsupportssport.location
    fill_in "Sport", with: @locationsupportssport.sport
    click_on "Update Locationsupportssport"

    assert_text "Locationsupportssport was successfully updated"
    click_on "Back"
  end

  test "destroying a Locationsupportssport" do
    visit locationsupportssports_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Locationsupportssport was successfully destroyed"
  end
end
