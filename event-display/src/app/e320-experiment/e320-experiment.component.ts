import { Component, OnInit } from '@angular/core';
import { EventDisplayService } from 'phoenix-ui-components';
import { Configuration, PresetView, ClippingSetting, PhoenixMenuNode, PhoenixLoader } from 'phoenix-event-display';

@Component({
  selector: 'app-e320-experiment',
  templateUrl: './e320-experiment.component.html',
  styleUrls: ['./e320-experiment.component.scss']
})
export class E320ExperimentComponent {

    /** The root Phoenix menu node. */
    phoenixMenuRoot = new PhoenixMenuNode("Phoenix Menu");
    
    constructor(private eventDisplay: EventDisplayService) { }
    
    ngOnInit() {
        // Create the event display configuration
        const configuration: Configuration = {
            eventDataLoader: new PhoenixLoader(),
            presetViews: [
                // simple preset views, looking at point 0,0,0 and with no clipping
                new PresetView('Left View', [0, 0, -12000], [0, 0, 0], 'left-cube'),
                new PresetView('Center View', [-500, 12000, 0], [0, 0, 0], 'top-cube'),
                // more fancy view, looking at point 0,0,5000 and with some clipping
                new PresetView('Right View', [0, 0, 12000], [0, 0, 5000], 'right-cube', ClippingSetting.On, 90, 90)
            ],
            // default view with x, y, z of the camera and then x, y, z of the point it looks at
            defaultView: [-2000, 0, 16000, 0, 0, 16000],
            phoenixMenuRoot: this.phoenixMenuRoot,
            // Event data to load by default
            defaultEventFile: {
                // (Assuming the file exists in the `src/assets` directory of the app)
                eventFile: 'assets/test-tracks.json',
                eventType: 'json'
            },
        }
        // Initialize the event display
        this.eventDisplay.init(configuration);

        // -----------------------------------------------------------------------------------------------
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/OPPPTracker.gltf',
            "OPPPTracker",
            "Tracker",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/OPPPSupportMiddleBar.gltf',
            "OPPPSupportMiddleBar",
            "Tracker",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/OPPPSupportBar.gltf',
            "OPPPSupportBar",
            "Tracker",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/OPPPSupportCrossBar.gltf',
            "OPPPSupportCrossBar",
            "Tracker",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/OPPPSupportJoin.gltf',
            "OPPPSupportJoin",
            "Tracker",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/OPPPSupportHolder.gltf',
            "OPPPSupportHolder",
            "Tracker",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/OPPPDetSupportTableTop.gltf',
            "OPPPDetSupportTableTop",
            "Tracker",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/OPPPDetSupportTableLeg.gltf',
            "OPPPDetSupportTableLeg",
            "Tracker",
            10);
    
        // -----------------------------------------------------------------------------------------------
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DetChamberContainer.gltf',
            "PDCContainer",
            "PDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DetChamberSupport.gltf',
            "PDCSupport",
            "PDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCTableLeg.gltf',
            "PDCTableLeg",
            "PDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCTableTop.gltf',
            "PDCTableTop",
            "PDC",
            10);
    
        // -----------------------------------------------------------------------------------------------
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCContainer.gltf',
            "EDCContainer",
            "EDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCSupport.gltf',
            "EDCSupport",
            "EDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCTableLeg.gltf',
            "EDCTableLeg",
            "EDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCTableTop.gltf',
            "EDCTableTop",
            "EDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCBellow.gltf',
            "EDCBellow",
            "EDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCBellowVac.gltf',
            "EDCBellowVac",
            "EDC",
            10);
    
        // -----------------------------------------------------------------------------------------------
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/GDCContainer.gltf',
            "GDCContainer",
            "GDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/GDCOptTblMiddle.gltf',
            "GDCOptTblMiddle",
            "GDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/GDCOptTblTop.gltf',
            "GDCOptTblTop",
            "GDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/GDCSupport.gltf',
            "GDCSupport",
            "GDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/GDCTableLeg.gltf',
            "GDCTableLeg",
            "GDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/GDCTableTop.gltf',
            "GDCTableTop",
            "GDC",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/GDCWindow.gltf',
            "GDCWindow",
            "GDC",
            10);
            
        // -----------------------------------------------------------------------------------------------
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpCoreContainer.gltf',
            "DumpCoreContainer",
            "Dump",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpCoreCoverLeg.gltf',
            "DumpCoreCoverLeg",
            "Dump",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpCoreCoverTop.gltf',
            "DumpCoreCoverTop",
            "Dump",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpPolySide.gltf',
            "DumpPolySide",
            "Dump",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpPolyTop.gltf',
            "DumpPolyTop",
            "Dump",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpShell.gltf',
            "DumpShell",
            "Dump",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpTableLeg.gltf',
            "DumpTableLeg",
            "Dump",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpTableTop.gltf',
            "DumpTableTop",
            "Dump",
            10);

        // -----------------------------------------------------------------------------------------------
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/FlashMagnetCoilX.gltf',
            "DipoleCoilX",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/FlashMagnetCoilZ.gltf',
            "DipoleCoilZ",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/FlashMagnetCore.gltf',
            "DipoleCore",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/FlashMagnetHalf.gltf',
            "DipoleHalf",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/FlashMCoilR.gltf',
            "DipoleCoilR",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DipolMagSmallSupportLeg.gltf',
            "DipoleSmallSupportLeg",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DipolMagSmallSupportTop.gltf',
            "DipoleSmallSupportTop",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpMagnetSupportLeg.gltf',
            "DipoleSupportLeg",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpMagnetSupportTop.gltf',
            "DipoleSupportTop",
            "Dipole",
            10);    
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DumpMagnetField.gltf',
            "DipoleMagnetField",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DipoleChamberDwnMag.gltf',
            "DipoleDwnMag",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DipoleChamberDwnMagVac.gltf',
            "DipoleDwnMagVac",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DplCDwnstrMagFlange.gltf',
            "DipoleDwnMagFlange",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DipoleChamberUstrMag.gltf',
            "DipoleUpstrMag",
            "Dipole",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DipoleChamberUstrMagVac.gltf',
            "DipoleUpstrMagVac",
            "Dipole",
            10);
            
        // -----------------------------------------------------------------------------------------------
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMagContainer.gltf',
            "QuadContainer",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMagSupportTop.gltf',
            "QuadSupportTop",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMagSupportLeg.gltf',
            "QuadSupportLeg",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag0Leg.gltf',
            "Quad0Leg",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag0Top.gltf',
            "Quad0Top",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag1Leg.gltf',
            "Quad1Leg",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag1Top.gltf',
            "Quad1Top",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag2Leg.gltf',
            "Quad2Leg",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag2Top.gltf',
            "Quad2Top",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag0Field.gltf',
            "QMag0Field",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag1Field.gltf',
            "QMag1Field",
            "Quads",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag2Field.gltf',
            "QMag2Field",
            "Quads",
            10);
    
        // -----------------------------------------------------------------------------------------------
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DCDownBPipePipe.gltf',
            "DCDownBPipePipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DCDownBPipeVac.gltf',
            "DCDownBPipeVac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/DCDownBPipeFlange.gltf',
            "DCDownBPipeFlange",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCBellowFlangePipe.gltf',
            "EDCBellowFlangePipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCBellowFlangeVac.gltf',
            "EDCBellowFlangeVac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCGDCBPipe1Pipe.gltf',
            "EDCGDCBPipe1Pipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCGDCBPipe1Vac.gltf',
            "EDCGDCBPipe1Vac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCGDCBPipe1Flange.gltf',
            "EDCGDCBPipe1Flange",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCGDCBPipe2Pipe.gltf',
            "EDCGDCBPipe2Pipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCGDCBPipe2Vac.gltf',
            "EDCGDCBPipe2Vac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/EDCGDCBPipe2Flange.gltf',
            "EDCGDCBPipe2Flange",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/ICDwnstrBPipePipe.gltf',
            "ICDwnstrBPipePipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/ICDwnstrBPipeVac.gltf',
            "ICDwnstrBPipeVac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/ICUpstrBPipePipe.gltf',
            "ICUpstrBPipePipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/ICUpstrBPipeVac.gltf',
            "ICUpstrBPipeVac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCUpFlexBPipePipe.gltf',
            "PDCUpFlexBPipePipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCUpFlexBPipeVac.gltf',
            "PDCUpFlexBPipeVac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCUpFlexBPipeFlange.gltf',
            "PDCUpFlexBPipeFlange",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCUpstreamBPipePipe.gltf',
            "PDCUpstreamBPipePipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCUpstreamBPipeVac.gltf',
            "PDCUpstreamBPipeVac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCUpstreamBPipeFlange.gltf',
            "PDCUpstreamBPipeFlange",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCUpstreamBPipePlugPipe.gltf',
            "PDCUpstreamBPipePlugPipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCUpstreamBPipePlugVac.gltf',
            "PDCUpstreamBPipePlugVac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag01BPipePipe.gltf',
            "QMag01BPipePipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag12BPipePipe.gltf',
            "QMag12BPipePipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag12BPipeVac.gltf',
            "QMag12BPipeVac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag2DipoleBPipePipe.gltf',
            "QMag2DipoleBPipePipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/QMag2DipoleBPipeVac.gltf',
            "QMag2DipoleBPipeVac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCEDCBPipe.gltf',
            "PDCEDCBPipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/PDCEDCBPipeVac.gltf',
            "PDCEDCBPipeVac",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/GDCJoinPipe.gltf',
            "GDCJoinPipe",
            "BeamPipe",
            10);
        this.eventDisplay.loadGLTFGeometry(
            'assets/e320-detector/GDCJoinPipeVac.gltf',
            "GDCJoinPipeVac",
            "BeamPipe",
            10);
    }
}
