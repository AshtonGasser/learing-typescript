// Instructions to every other class
// on how they can be an argument

// Mappable can take any argument
// as long as it satisfies interface

// abstract class?

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  //   addCompanyMarker(company: Company ): void {
  //     new google.maps.Marker({
  //         map: this.googleMap,
  //         position: {
  //           lat: company.location.lat,
  //           lng: company.location.lng,
  //         },
  //       });

  //   }
}