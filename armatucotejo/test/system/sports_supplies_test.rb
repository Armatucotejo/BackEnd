require "application_system_test_case"

class SportsSuppliesTest < ApplicationSystemTestCase
  setup do
    @sports_supply = sports_supplies(:one)
  end

  test "visiting the index" do
    visit sports_supplies_url
    assert_selector "h1", text: "Sports Supplies"
  end

  test "creating a Sports supply" do
    visit sports_supplies_url
    click_on "New Sports Supply"

    fill_in "Name", with: @sports_supply.name
    click_on "Create Sports supply"

    assert_text "Sports supply was successfully created"
    click_on "Back"
  end

  test "updating a Sports supply" do
    visit sports_supplies_url
    click_on "Edit", match: :first

    fill_in "Name", with: @sports_supply.name
    click_on "Update Sports supply"

    assert_text "Sports supply was successfully updated"
    click_on "Back"
  end

  test "destroying a Sports supply" do
    visit sports_supplies_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Sports supply was successfully destroyed"
  end
end
