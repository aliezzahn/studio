import { useState } from 'react';
import { HexAlphaColorPicker } from 'react-colorful';
import { Popover } from 'react-tiny-popover';

interface PopoverPickerProps {
    color: string;
    onChange: (color: string) => void;
}

export const PopoverPicker = ({ color, onChange }: PopoverPickerProps) => {
    const [isOpen, toggle] = useState(false);

    function renderColorPicker() {
        return <HexAlphaColorPicker className="m-4" color={color} onChange={onChange} />;
    }

    return (
        <Popover
            isOpen={isOpen}
            positions={['left', 'bottom', 'top', 'right']} // preferred positions by priority
            content={renderColorPicker()}
            onClickOutside={() => toggle(false)}
        >
            <button
                className={`rounded w-5 h-5 border border-white/20 cursor-pointer`}
                style={{ backgroundColor: color }}
                onClick={() => toggle(!isOpen)}
            ></button>
        </Popover>
    );
};
