require "test_helper"
require "mocha/minitest"

class CampaignsControllerTest < ActionDispatch::IntegrationTest
  setup do
    user = users(:one)
    CampaignsController.any_instance.stubs(:authorize).returns
    CampaignsController.any_instance.stubs(:user).returns(user)
    @campaign = campaigns(:one)
  end

  test "should get index" do
    get campaigns_url, as: :json
    assert_response :success
  end

  test "should create campaign" do
    assert_difference("Campaign.count") do
      post campaigns_url, params: { campaign: { description: @campaign.description, name: @campaign.name } }, as: :json
    end

    assert_response :created
  end

  test "should show campaign" do
    get campaign_url(@campaign), as: :json
    assert_response :success
  end

  test "should update campaign" do
    patch campaign_url(@campaign), params: { campaign: { description: @campaign.description, name: @campaign.name } }, as: :json
    assert_response :success
  end

  test "should destroy campaign" do
    assert_difference("Campaign.count", -1) do
      delete campaign_url(@campaign), as: :json
    end

    assert_response :no_content
  end
end
