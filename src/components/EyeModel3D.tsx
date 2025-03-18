import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Html } from '@react-three/drei';
import { EyeModel3DProps } from '../interfaces';
import { useTheme } from './ThemeContext';

// Function to convert prescription to visual distortion effect
const useDistortionEffect = (prescription?: { sphere: number; cylinder: number; axis: number }) => {
  // This is a simplified simulation - in a real app, this would be more sophisticated
  const sphereDistortion = prescription?.sphere || 0;
  const cylinderDistortion = prescription?.cylinder || 0;
  
  return {
    scale: [
      1 + (sphereDistortion * 0.05),
      1 + (sphereDistortion * 0.05) + (cylinderDistortion * 0.025),
      1
    ],
    // Other distortion effects could be calculated here
  };
};

// Eye part component
interface EyePartProps {
  position: [number, number, number];
  color: string;
  name: string;
  radius: number;
  highlighted?: boolean;
  showLabel?: boolean;
}

const EyePart: React.FC<EyePartProps> = ({ 
  position, 
  color, 
  name, 
  radius, 
  highlighted = false,
  showLabel = false
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Optional rotation animation
  useFrame(() => {
    if (meshRef.current && highlighted) {
      meshRef.current.rotation.y += 0.005;
    }
  });
  
  return (
    <group>
      <Sphere 
        ref={meshRef}
        args={[radius, 32, 32]} 
        position={position}
      >
        <meshStandardMaterial 
          color={color} 
          transparent={true} 
          opacity={highlighted ? 0.9 : 0.7}
          wireframe={highlighted}
        />
      </Sphere>
      
      {showLabel && (
        <Html position={[position[0], position[1] + radius + 0.1, position[2]]}>
          <div style={{ 
            background: 'rgba(0,0,0,0.7)', 
            color: 'white', 
            padding: '2px 5px', 
            borderRadius: '3px',
            fontSize: '10px',
            userSelect: 'none'
          }}>
            {name}
          </div>
        </Html>
      )}
    </group>
  );
};

// Main eye model
const EyeModel: React.FC<{
  rotationSpeed?: number;
  showLabels?: boolean;
  highlightParts?: string[];
  prescription?: { sphere: number; cylinder: number; axis: number };
}> = ({ 
  rotationSpeed = 0.001,
  showLabels = false,
  highlightParts = [],
  prescription
}) => {
  const eyeRef = useRef<THREE.Group>(null);
  const distortion = useDistortionEffect(prescription);
  
  // Rotate the entire eye model
  useFrame(() => {
    if (eyeRef.current) {
      eyeRef.current.rotation.y += rotationSpeed;
    }
  });
  
  return (
    <group ref={eyeRef} scale={distortion.scale as any}>
      {/* Sclera (white of eye) */}
      <EyePart 
        position={[0, 0, 0]} 
        color="#f5f5f5" 
        name="Sclera" 
        radius={1.0}
        highlighted={highlightParts.includes('sclera')}
        showLabel={showLabels}
      />
      
      {/* Cornea */}
      <EyePart 
        position={[0, 0, 1]} 
        color="#e0f7fa" 
        name="Cornea" 
        radius={0.5}
        highlighted={highlightParts.includes('cornea')}
        showLabel={showLabels}
      />
      
      {/* Iris */}
      <EyePart 
        position={[0, 0, 1.2]} 
        color="#2196f3" 
        name="Iris" 
        radius={0.4}
        highlighted={highlightParts.includes('iris')}
        showLabel={showLabels}
      />
      
      {/* Pupil */}
      <EyePart 
        position={[0, 0, 1.3]} 
        color="#000000" 
        name="Pupil" 
        radius={0.2}
        highlighted={highlightParts.includes('pupil')}
        showLabel={showLabels}
      />
      
      {/* Lens */}
      <EyePart 
        position={[0, 0, 0.6]} 
        color="#b2ebf2" 
        name="Lens" 
        radius={0.3}
        highlighted={highlightParts.includes('lens')}
        showLabel={showLabels}
      />
      
      {/* Retina */}
      <EyePart 
        position={[0, 0, -0.7]} 
        color="#e57373" 
        name="Retina" 
        radius={0.8}
        highlighted={highlightParts.includes('retina')}
        showLabel={showLabels}
      />
    </group>
  );
};

// Main component wrapper
const EyeModel3D: React.FC<EyeModel3DProps> = ({
  rotationSpeed = 0.001,
  showLabels = false,
  highlightParts = [],
  prescription,
  interactive = true,
  width = '100%',
  height = 400
}) => {
  const { darkMode } = useTheme();
  
  return (
    <div style={{ width, height }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: darkMode ? '#1a1a1a' : '#f0f0f0' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <EyeModel 
          rotationSpeed={rotationSpeed}
          showLabels={showLabels}
          highlightParts={highlightParts}
          prescription={prescription}
        />
        
        {interactive && <OrbitControls enableZoom={true} />}
      </Canvas>
    </div>
  );
};

export default EyeModel3D; 