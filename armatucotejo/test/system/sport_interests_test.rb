require "application_system_test_case"

class SportInterestsTest < ApplicationSystemTestCase
  setup do
    @sport_interest = sport_interests(:one)
  end

  test "visiting the index" do
    visit sport_interests_url
    assert_selector "h1", text: "Sport Interests"
  end

  test "creating a Sport interest" do
    visit sport_interests_url
    click_on "New Sport Interest"

    click_on "Create Sport interest"

    assert_text "Sport interest was successfully created"
    click_on "Back"
  end

  test "updating a Sport interest" do
    visit sport_interests_url
    click_on "Edit", match: :first

    click_on "Update Sport interest"

    assert_text "Sport interest was successfully updated"
    click_on "Back"
  end

  test "destroying a Sport interest" do
    visit sport_interests_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Sport interest was successfully destroyed"
  end
end
