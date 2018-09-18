require 'test_helper'

class SportsStoresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sports_store = sports_stores(:one)
  end

  test "should get index" do
    get sports_stores_url
    assert_response :success
  end

  test "should get new" do
    get new_sports_store_url
    assert_response :success
  end

  test "should create sports_store" do
    assert_difference('SportsStore.count') do
      post sports_stores_url, params: { sports_store: { address: @sports_store.address } }
    end

    assert_redirected_to sports_store_url(SportsStore.last)
  end

  test "should show sports_store" do
    get sports_store_url(@sports_store)
    assert_response :success
  end

  test "should get edit" do
    get edit_sports_store_url(@sports_store)
    assert_response :success
  end

  test "should update sports_store" do
    patch sports_store_url(@sports_store), params: { sports_store: { address: @sports_store.address } }
    assert_redirected_to sports_store_url(@sports_store)
  end

  test "should destroy sports_store" do
    assert_difference('SportsStore.count', -1) do
      delete sports_store_url(@sports_store)
    end

    assert_redirected_to sports_stores_url
  end
end
