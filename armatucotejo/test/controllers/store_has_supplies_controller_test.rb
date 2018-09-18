require 'test_helper'

class StoreHasSuppliesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @store_has_supply = store_has_supplies(:one)
  end

  test "should get index" do
    get store_has_supplies_url
    assert_response :success
  end

  test "should get new" do
    get new_store_has_supply_url
    assert_response :success
  end

  test "should create store_has_supply" do
    assert_difference('StoreHasSupply.count') do
      post store_has_supplies_url, params: { store_has_supply: {  } }
    end

    assert_redirected_to store_has_supply_url(StoreHasSupply.last)
  end

  test "should show store_has_supply" do
    get store_has_supply_url(@store_has_supply)
    assert_response :success
  end

  test "should get edit" do
    get edit_store_has_supply_url(@store_has_supply)
    assert_response :success
  end

  test "should update store_has_supply" do
    patch store_has_supply_url(@store_has_supply), params: { store_has_supply: {  } }
    assert_redirected_to store_has_supply_url(@store_has_supply)
  end

  test "should destroy store_has_supply" do
    assert_difference('StoreHasSupply.count', -1) do
      delete store_has_supply_url(@store_has_supply)
    end

    assert_redirected_to store_has_supplies_url
  end
end
