#include <iostream>

#include "TSystem.h"
#include "TGeoManager.h"

int GdmlToRootExport() {
    // Loading the library and geometry
    gSystem->Load("libGeom");
    TGeoManager::Import("/home/romanurmanov/lab/LUXE/acts_LUXE_tracking/E320Pipeline_gdmls/ettgeom_no_tunnel.gdml");
    // The number here can be changed based on the depth 
    // of the visibility level of your gdml file and the 
    // detail that you want to visualize it. 
    gGeoManager->SetVisLevel(4); 

    // Export the geometry
    gGeoManager->Export("ettgeom_no_tunnel.root");

    return 0;
}