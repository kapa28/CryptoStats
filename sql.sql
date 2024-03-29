CREATE DATABASE `crypto_stats`;
USE `crypto_stats`;

CREATE TABLE `token_raw` (
	`id` VARCHAR(75) NOT NULL,
	`symbol` VARCHAR(5) NOT NULL,
	`name` VARCHAR(75) NOT NULL,
	`web_slug` TEXT,
	`asset_platform_id` INT,
	`platforms` TEXT,
	`detail_platforms.decimal_place` TEXT,
	`detail_platforms.contract_address` TEXT,
	`block_time_in_minutes` INT,
	`hashing_algorithm` VARCHAR(50),
	`categories` TEXT,
	`preview_listing` TEXT,
	`public_notice` TEXT,
	`description` TEXT,
	`links.homepage` TEXT,
	`links.whitepaper` TEXT,        
	`links.blockchain_site` TEXT,   
	`links.official_forum_url` TEXT,        
	`links.chat_url` TEXT,
	`links.announcement_url`TEXT,
	`links.twitter_screen_name` TEXT,       
	`links.facebook_username` TEXT, 
	`links.bitcointalk_thread_identifier` TEXT,
	`links.telegram_channel_identifier` TEXT,       
	`links.subreddit_url`   TEXT,
	`links.repos_url.github`        TEXT,
	`image.thumb`   TEXT,
	`image.small`   TEXT,
	`image.large`   TEXT,
	`country_origin`        TEXT,
	`genesis_date`  TEXT,
	`sentiment_votes_up_percentage` TEXT,
	`sentiment_votes_down_percentage`       TEXT,
	`watchlist_portfolio_users`     TEXT,
	`market_cap_rank`       INT NOT NULL,
	`community_data.facebook_likes` TEXT,
	`community_data.twitter_followers`      TEXT,
	`community_data.reddit_average_posts_48h`       TEXT,
	`community_data.reddit_average_comments_48h`    TEXT,
	`community_data.reddit_subscribers`     TEXT,
	`community_data.reddit_accounts_active_48h`     TEXT,
	`community_data.telegram_channel_user_count`    TEXT,
	`last_updated`  TEXT,
	`ico_data.ico_start_date`       TEXT,
	`ico_data.ico_end_date` TEXT,
	`ico_data.short_desc`   TEXT,
	`ico_data.description`  TEXT,
	`ico_data.softcap_currency`     TEXT,
	`ico_data.hardcap_currency`     TEXT,
	`ico_data.total_raised_currency`        TEXT,
	`ico_data.softcap_amount`       TEXT,
	`ico_data.hardcap_amount`       TEXT,
	`ico_data.total_raised` TEXT,
	`ico_data.quote_pre_sale_currency`      TEXT,
	`ico_data.base_pre_sale_amount` TEXT,
	`ico_data.quote_pre_sale_amount`        TEXT,
	`ico_data.quote_public_sale_currency`   TEXT,
	`ico_data.base_public_sale_amount`      TEXT,
	`ico_data.quote_public_sale_amount`     TEXT,
	`ico_data.accepting_currencies` TEXT,
	`ico_data.country_origin`       TEXT,
	`ico_data.pre_sale_start_date`  TEXT,
	`ico_data.pre_sale_end_date`    TEXT,
	`ico_data.whitelist_url`        TEXT,
	`ico_data.whitelist_start_date` TEXT,
	`ico_data.whitelist_end_date`   TEXT,
	`ico_data.bounty_detail_url`    TEXT,
	`ico_data.amount_for_sale`      TEXT,
	`ico_data.kyc_required` TEXT,
	`ico_data.whitelist_available`  TEXT,
	`ico_data.pre_sale_available`   TEXT,
	`ico_data.pre_sale_ended` TEXT
);

LOAD DATA INFILE 'C:/Users/Student/Desktop/Zbirke1/Zbirke/tokens_info.csv' 
INTO TABLE `token_raw`
FIELDS TERMINATED BY ',' ENCLOSED BY '"' /*ESCAPED BY "\\"*/
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


