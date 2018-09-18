require "application_system_test_case"

class SportsStoresTest < ApplicationSystemTestCase
  setup do
    @sports_store = sports_stores(:one)
  end

  test "visiting the index" do
    visit sports_stores_url
    assert_selector "h1", text: "Sports Stores"
  end

  test "creating a Sports store" do
    visit sports_stores_url
    click_on "New Sports Store"

    fill_in "Address", with: @sports_store.address
    click_on "Create Sports store"

    assert_text "Sports store was successfully created"
    click_on "Back"
  end

  test "updating a Sports store" do
    visit sports_stores_url
    click_on "Edit", match: :first

    fill_in "Address", with: @sports_store.address
    click_on "Update Sports store"

    assert_text "Sports store was successfully updated"
    click_on "Back"
  end

  test "destroying a Sports store" do
    visit sports_stores_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Sports store was successfully destroyed"
  end
end
