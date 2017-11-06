require_relative './song_data.rb'
require_relative './artist_data.rb'

Song.destroy_all
Artist.destroy_all

song_data = get_song_data
artist_data = get_artist_data

song_data.each_pair do |artist_name, songs|
  info = artist_data[artist_name]
  current_artist = Artist.create!({
                                      name:         info[:name],
                                      photo_url:    info[:photo_url],
                                      nationality:  info[:nationality]
                                  })

  songs.each do |song|
    Song.create!({
                     title:        song[:title],
                     album:        song[:album],
                     preview_url:  song[:preview_link],
                     artist:       current_artist
                 })
  end
end