require "application_system_test_case"

class SportinterestsTest < ApplicationSystemTestCase
  setup do
    @sportinterest = sportinterests(:one)
  end

  test "visiting the index" do
    visit sportinterests_url
    assert_selector "h1", text: "Sportinterests"
  end

  test "creating a Sportinterest" do
    visit sportinterests_url
    click_on "New Sportinterest"

    fill_in "Player", with: @sportinterest.player_id
    fill_in "Sport", with: @sportinterest.sport_id
    click_on "Create Sportinterest"

    assert_text "Sportinterest was successfully created"
    click_on "Back"
  end

  test "updating a Sportinterest" do
    visit sportinterests_url
    click_on "Edit", match: :first

    fill_in "Player", with: @sportinterest.player_id
    fill_in "Sport", with: @sportinterest.sport_id
    click_on "Update Sportinterest"

    assert_text "Sportinterest was successfully updated"
    click_on "Back"
  end

  test "destroying a Sportinterest" do
    visit sportinterests_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Sportinterest was successfully destroyed"
  end
end
