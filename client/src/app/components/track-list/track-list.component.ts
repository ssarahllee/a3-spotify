import { Component, OnInit, Input } from "@angular/core";
import { TrackData } from "../../data/track-data";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-track-list",
  templateUrl: "./track-list.component.html",
  styleUrls: ["./track-list.component.css"],
  standalone: false,
})
export class TrackListComponent implements OnInit {
  @Input() tracks: TrackData[];
  @Input() hideArtist: boolean = false;
  @Input() hideAlbum: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private trackInfo: SpotifyService,
  ) {}

  ngOnInit() {
    this.trackId = this.route.snapshot.paramMap.get("id");
    this.trackInfo.getTrack(
      this.trackId.then((data) => {
        this.track = data;
      }),
    );
  }
}
