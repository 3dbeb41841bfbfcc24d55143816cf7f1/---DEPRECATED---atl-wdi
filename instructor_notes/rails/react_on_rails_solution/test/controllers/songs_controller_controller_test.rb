require 'test_helper'

class SongsControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get songs_controller_index_url
    assert_response :success
  end

  test "should get create" do
    get songs_controller_create_url
    assert_response :success
  end

  test "should get show" do
    get songs_controller_show_url
    assert_response :success
  end

  test "should get update" do
    get songs_controller_update_url
    assert_response :success
  end

  test "should get destroy" do
    get songs_controller_destroy_url
    assert_response :success
  end

end
