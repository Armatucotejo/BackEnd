require "application_system_test_case"

class MatchparticipantsTest < ApplicationSystemTestCase
  setup do
    @matchparticipant = matchparticipants(:one)
  end

  test "visiting the index" do
    visit matchparticipants_url
    assert_selector "h1", text: "Matchparticipants"
  end

  test "creating a Matchparticipant" do
    visit matchparticipants_url
    click_on "New Matchparticipant"

    fill_in "Matchid", with: @matchparticipant.matchid
    fill_in "Playerid", with: @matchparticipant.playerid
    click_on "Create Matchparticipant"

    assert_text "Matchparticipant was successfully created"
    click_on "Back"
  end

  test "updating a Matchparticipant" do
    visit matchparticipants_url
    click_on "Edit", match: :first

    fill_in "Matchid", with: @matchparticipant.matchid
    fill_in "Playerid", with: @matchparticipant.playerid
    click_on "Update Matchparticipant"

    assert_text "Matchparticipant was successfully updated"
    click_on "Back"
  end

  test "destroying a Matchparticipant" do
    visit matchparticipants_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Matchparticipant was successfully destroyed"
  end
end
