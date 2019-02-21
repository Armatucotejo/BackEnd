require "application_system_test_case"

class MatchParticipantsTest < ApplicationSystemTestCase
  setup do
    @match_participant = match_participants(:one)
  end

  test "visiting the index" do
    visit match_participants_url
    assert_selector "h1", text: "Match Participants"
  end

  test "creating a Match participant" do
    visit match_participants_url
    click_on "New Match Participant"

    click_on "Create Match participant"

    assert_text "Match participant was successfully created"
    click_on "Back"
  end

  test "updating a Match participant" do
    visit match_participants_url
    click_on "Edit", match: :first

    click_on "Update Match participant"

    assert_text "Match participant was successfully updated"
    click_on "Back"
  end

  test "destroying a Match participant" do
    visit match_participants_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Match participant was successfully destroyed"
  end
end
