import React from 'react'
import {Flex, Box} from '../Box';
import Logo from './logo';
import Button from '../Button/Button';
import {Dropdown} from '../Dropdown'
import styled from 'styled-components';
import {PlanetRoundIcon} from '../Svg';


export default function Header() {
    return (
        <header>
            <Flex alignItems="center" justifyContent="space-between">
                <Flex alignItems="center">
                    <Box>
                        <PlanetRoundIcon width={35} />
                    </Box>
                    <nav>
                    <Flex paddingX={2} alignItems="center">
                        <Dropdown target={<Button variant="text">Trade</Button>}>
                        <Button style={{color: '#000'}} variant="text">exchange</Button>
                        </Dropdown>
                        <Button as={"a"} href="crypto" style={{color: '#000'}} variant="text">Buy Crypto</Button>
                        <Button style={{color: '#000'}} variant="text">Markets</Button>
                        <Button style={{color: '#000'}}  variant="text">NFT</Button>
                    </Flex>
                    </nav>
                </Flex>
                <Flex>
                    <Flex paddingX={4}>
                        <Button style={{color: '#000'}} variant="text">Login</Button>
                        <Button variant="primary">Register</Button>
                    </Flex>
                    <Button style={{color: '#000'}} variant="text">Download</Button>
                    <Button style={{color: '#000'}} variant="text">English</Button>
                    <Button style={{color: '#000'}} variant="text">USD</Button>
                </Flex>
            </Flex>
        </header>
    )
}
