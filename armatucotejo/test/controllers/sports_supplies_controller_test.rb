require 'test_helper'

class SportsSuppliesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sports_supply = sports_supplies(:one)
  end

  test "should get index" do
    get sports_supplies_url
    assert_response :success
  end

  test "should get new" do
    get new_sports_supply_url
    assert_response :success
  end

  test "should create sports_supply" do
    assert_difference('SportsSupply.count') do
      post sports_supplies_url, params: { sports_supply: { name: @sports_supply.name } }
    end

    assert_redirected_to sports_supply_url(SportsSupply.last)
  end

  test "should show sports_supply" do
    get sports_supply_url(@sports_supply)
    assert_response :success
  end

  test "should get edit" do
    get edit_sports_supply_url(@sports_supply)
    assert_response :success
  end

  test "should update sports_supply" do
    patch sports_supply_url(@sports_supply), params: { sports_supply: { name: @sports_supply.name } }
    assert_redirected_to sports_supply_url(@sports_supply)
  end

  test "should destroy sports_supply" do
    assert_difference('SportsSupply.count', -1) do
      delete sports_supply_url(@sports_supply)
    end

    assert_redirected_to sports_supplies_url
  end
end
