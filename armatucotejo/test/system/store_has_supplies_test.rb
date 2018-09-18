require "application_system_test_case"

class StoreHasSuppliesTest < ApplicationSystemTestCase
  setup do
    @store_has_supply = store_has_supplies(:one)
  end

  test "visiting the index" do
    visit store_has_supplies_url
    assert_selector "h1", text: "Store Has Supplies"
  end

  test "creating a Store has supply" do
    visit store_has_supplies_url
    click_on "New Store Has Supply"

    click_on "Create Store has supply"

    assert_text "Store has supply was successfully created"
    click_on "Back"
  end

  test "updating a Store has supply" do
    visit store_has_supplies_url
    click_on "Edit", match: :first

    click_on "Update Store has supply"

    assert_text "Store has supply was successfully updated"
    click_on "Back"
  end

  test "destroying a Store has supply" do
    visit store_has_supplies_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Store has supply was successfully destroyed"
  end
end
